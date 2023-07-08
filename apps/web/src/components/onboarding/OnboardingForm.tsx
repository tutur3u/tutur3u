import { AtSymbolIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Button, Divider, TextInput } from '@mantine/core';
import { ChangeEvent, useEffect, useState } from 'react';
import LoadingIndicator from '../common/LoadingIndicator';
import { useWorkspaces } from '../../hooks/useWorkspaces';
import { useRouter } from 'next/router';
import WorkspaceInviteSnippet from '../notifications/WorkspaceInviteSnippet';
import { useUser } from '../../hooks/useUser';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from '../selectors/LanguageSelector';
import { mutate } from 'swr';
import { useSessionContext } from '@supabase/auth-helpers-react';

interface Props {
  forceLoading?: boolean;
}

const OnboardingForm = ({ forceLoading = false }: Props) => {
  const router = useRouter();

  const { user, updateUser } = useUser();
  const { workspaces, workspaceInvites } = useWorkspaces();

  const [displayName, setDisplayName] = useState('');
  const [handle, setUsername] = useState('');

  const [profileCompleted, setProfileCompleted] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const { nextUrl, withWorkspace } = router.query;

    if (user && workspaces && nextUrl && !withWorkspace) {
      router.push(nextUrl.toString());
      return;
    }

    if (!user) {
      mutate('/api/user');
      return;
    }

    if (!workspaces) {
      mutate('/api/workspaces/current');
      mutate('/api/workspaces/invites');
      return;
    }

    const hasDisplayName = (user?.display_name || '')?.length > 0;
    const hasUsername = (user?.handle || '')?.length > 0;

    setProfileCompleted(hasDisplayName && hasUsername);

    const hasWorkspaces = workspaces.length > 0;

    if (hasDisplayName && hasUsername && hasWorkspaces) {
      if (!workspaces?.[0]?.id) return;

      const url =
        withWorkspace !== 'true' && nextUrl
          ? nextUrl.toString() || '/'
          : `/${workspaces[0].id}/` + (nextUrl || '');

      if (url) router.push(url);
      return;
    } else if (hasDisplayName && hasUsername) return;

    setDisplayName(user?.display_name || '');
    setUsername(user?.handle || '');
  }, [router, user, workspaces, profileCompleted]);

  const updateProfile = async () => {
    setSaving(true);

    await updateUser?.({
      display_name: displayName,
      handle,
    });

    setSaving(false);
  };

  const { t } = useTranslation('onboarding');
  const { supabaseClient } = useSessionContext();

  const displayNameLabel = t('display-name');
  const usernameLabel = t('username');

  const save = t('save');

  const welcome = t('welcome');
  const welcomeDesc = t('welcome-desc');

  const justAMoment = t('just-a-moment');
  const justAMomentDesc = t('just-a-moment-desc');

  const currentlyLoggedIn = t('currently-logged-in');
  const noInvites = t('no-invites');
  const logoutLabel = t('common:logout');

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.push('/');
  };

  return (
    <>
      <div className="absolute inset-0 mx-4 flex items-center justify-center md:mx-4 lg:mx-32">
        <div className="flex max-h-full w-full max-w-2xl flex-col items-center gap-4 rounded-xl bg-zinc-700/50 p-4 backdrop-blur-2xl md:p-8">
          {forceLoading ||
          !user ||
          !workspaces ||
          (workspaces && workspaces?.length > 0 && profileCompleted) ? (
            <div className="flex h-full w-full items-center justify-center">
              <LoadingIndicator className="h-8 w-8" />
            </div>
          ) : (
            <>
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-200 via-green-200 to-green-300 bg-clip-text py-2 text-4xl font-semibold text-transparent md:text-5xl">
                  {profileCompleted ? justAMoment : welcome}
                </div>

                <div className="text-xl font-semibold text-zinc-200">
                  {profileCompleted ? justAMomentDesc : welcomeDesc}
                </div>
              </div>

              {profileCompleted || (
                <>
                  <Divider className="w-full border-zinc-300/20" />
                  <div className="w-full rounded-lg bg-green-300/10 p-4 text-center text-green-300">
                    <div className="text-lg font-semibold opacity-80">
                      {currentlyLoggedIn}
                    </div>
                    <Divider
                      className="my-2 w-full border-green-300/20"
                      variant="dashed"
                    />
                    <div className="text-2xl font-semibold">{user?.email}</div>
                  </div>
                </>
              )}

              <Divider className="w-full border-zinc-300/20" />

              {profileCompleted ? (
                <div className="scrollbar-none grid h-full w-full gap-4 overflow-y-scroll">
                  {(workspaceInvites?.length || 0) > 0 ? (
                    workspaceInvites?.map((ws) => (
                      <WorkspaceInviteSnippet key={ws.id} ws={ws} />
                    ))
                  ) : (
                    <div className="flex h-full items-center justify-center px-8 py-16 text-center text-2xl font-semibold text-zinc-300/70">
                      {noInvites}
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid w-full gap-2">
                  <TextInput
                    id="display-name"
                    icon={<UserCircleIcon className="h-5" />}
                    label={displayNameLabel}
                    placeholder="Trần Văn A"
                    value={displayName}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setDisplayName(event.currentTarget.value)
                    }
                    classNames={{
                      label: 'text-zinc-200/80 mb-1',
                      input:
                        'bg-zinc-300/10 border-zinc-300/10 placeholder-zinc-200/30',
                    }}
                    disabled={saving}
                    autoComplete="off"
                  />

                  <TextInput
                    id="handle"
                    icon={<AtSymbolIcon className="h-5" />}
                    label={usernameLabel}
                    placeholder="tranvana"
                    value={handle}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      setUsername(event.currentTarget.value)
                    }
                    classNames={{
                      label: 'text-zinc-200/80 mb-1',
                      input:
                        'bg-zinc-300/10 border-zinc-300/10 placeholder-zinc-200/30',
                    }}
                    disabled={saving}
                    autoComplete="off"
                  />
                </div>
              )}

              {profileCompleted || (
                <div className="grid w-full gap-2 text-center">
                  <Button
                    className="bg-blue-300/10"
                    variant="light"
                    loading={saving}
                    onClick={updateProfile}
                  >
                    {save}
                  </Button>
                </div>
              )}

              <Divider className="w-full border-zinc-300/20" />
              <div className="grid w-full gap-2">
                <LanguageSelector transparent fullWidth />
                <Button
                  className="w-full border border-red-300/10 bg-red-300/10 text-red-300 hover:bg-red-300/20"
                  variant="light"
                  color="red"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  {logoutLabel}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OnboardingForm;
