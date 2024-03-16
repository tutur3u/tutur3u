import { members } from './core-members';
import GetStartedButton from './get-started-button';
import {
  CalendarHeart,
  Cpu,
  MemoryStick,
  Network,
  Sparkles,
  Telescope,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function MarketingPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="text-foreground mt-8 flex max-w-6xl flex-col items-center justify-center gap-6 px-3 py-16 pb-0">
        <div className="flex flex-col items-center justify-center">
          <h1 className="relative text-center text-4xl font-bold lg:text-7xl">
            <span className="sr-only">RMIT Neo Culture Tech</span>
            <div className="h-64 w-64">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 890 787"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M508.595 785.779C503.749 788.982 501.241 784.992 498.445 783.274C467.518 764.277 436.72 745.07 405.883 725.927C384.949 712.932 364.116 699.767 342.997 687.08C337.258 683.632 334.751 679.526 334.03 672.857C329.06 626.897 323.674 580.982 318.433 535.052C315.306 507.642 312.197 480.232 308.487 452.236C300.644 443.971 303.86 433.919 302.634 425.122C300.085 406.832 297.809 388.432 296.373 369.085C294.62 337.343 289.769 306.816 286.708 276.106C283.48 243.728 279.316 211.458 275.848 179.109C272.417 147.091 268.208 115.156 265.016 83.115C263.912 72.028 260.151 60.892 264.326 48.748C281.213 42.42 298.461 39.067 315.46 34.771C343.763 27.618 372.199 20.989 401.372 14.052C409.134 14.597 414.447 18.775 420.097 22.269C438.514 33.656 456.631 45.538 475.281 56.532C485.017 62.271 490.256 70.086 491.393 81.278C494.486 111.737 498.783 142.063 501.887 172.52C505.664 209.6 510.455 246.557 514.744 283.574C518.497 315.96 521.761 348.401 525.895 381.627C526.421 405.83 530.415 428.815 532.925 451.939C536.439 484.323 540.575 516.636 544.165 549.014C547.609 580.072 551.019 611.134 554.884 642.146C557.268 661.276 559.652 680.415 560.896 700.493C561.133 706.6 558.65 710.982 555.982 715.182C542.628 736.207 529.305 757.251 516.097 778.368C514.305 781.233 512.277 783.802 508.595 785.778V785.779Z"
                  fill="#4896AC"
                />
                <path
                  d="M263.89 48.228C267.59 61.504 268.209 75.471 269.846 89.292C275.164 134.196 280.106 179.145 285.152 224.081C288.862 257.125 292.608 290.166 296.136 323.23C297.652 337.433 300.381 351.527 300.068 366.77C295.584 383.444 285.004 395.795 276.57 409.241C245.603 458.609 214.866 508.121 183.752 557.396C180.237 562.963 177.623 569.327 171.196 573.604C167.67 577.692 165.267 574.608 162.964 573.204C151.314 566.104 139.714 558.919 128.17 551.645C87.63 526.092 47.104 500.517 6.592 474.92C-1.001 470.124 -1.824 471.794 4.096 462.337C15.043 444.847 25.946 427.327 36.891 409.836C109.444 293.88 182.005 177.929 254.575 61.983C257.513 57.2869 260.62 52.6989 263.89 48.228ZM559.134 703.833C554.448 681.363 552.894 658.753 550.097 636.299C546.024 603.596 542.283 570.851 538.46 538.118C535.795 515.305 533.242 492.48 530.616 469.663C527.798 445.186 524.916 420.716 522.158 396.232C521.675 391.938 521.669 387.59 521.576 382.322C532.754 354.488 551.289 332.034 565.809 307.2C569.583 300.745 571.966 293.07 579.532 288.663C586.342 281.184 590.982 272.763 596.029 264.623C598.233 261.068 600.7 258.799 605.081 257.779C649.948 247.332 694.753 236.623 740.335 225.984C744.914 226.076 748.128 227.775 751.245 229.769C771.16 242.512 791.36 254.798 811.382 267.369C827.102 277.237 828.008 281.189 818.112 297.015C771.15 372.115 723.985 447.088 676.919 522.123C641.001 579.385 605.252 636.753 569.039 693.83C566.591 697.687 564.666 702.195 559.134 703.833Z"
                  fill="#032639"
                />
                <path
                  d="M558.177 704.365C579.763 669.947 601.21 636.282 622.442 602.482C671.842 523.842 721.147 445.142 770.47 366.452C787.088 339.94 803.684 313.414 820.196 286.835C824.42 280.037 824.323 279.825 817.42 275.485C794.316 260.955 771.151 246.523 748.036 232.012C745.801 230.609 743.745 228.921 741.35 226.673C758.144 220.245 775.933 217.45 793.255 212.803C796.252 211.999 798.427 213.254 800.683 214.673C828.881 232.39 857.093 250.085 885.243 267.877C890.487 271.191 890.459 271.433 886.439 277.974C858.532 323.377 830.846 368.917 802.597 414.106C740.983 512.668 679.091 611.056 617.277 709.493C604.877 729.239 592.198 748.812 579.924 768.635C577.394 772.721 574.21 774.833 569.731 775.627C549.746 779.165 529.767 782.732 508.941 786.317C511.848 777.452 517.478 769.647 522.534 761.521C534.269 742.657 546.13 723.872 558.177 704.365ZM579.95 287.843C573.362 303.113 563.946 316.07 555.6 329.662C544.97 346.971 533.93 364.027 522.388 381.284C517.525 344.337 513.385 307.293 509.146 270.26C505.512 238.502 501.756 206.757 498.073 175.004C494.163 141.282 490.161 107.569 486.499 73.82C485.949 68.752 483.274 66.335 479.423 63.948C457.059 50.086 434.776 36.095 412.495 22.099C409.142 19.992 405.375 18.408 402.54 14.518C418.89 8.36601 436.333 5.55601 453.263 0.76801C456.223 -0.0709904 458.437 1.01101 460.723 2.42501C490.153 20.628 519.563 38.862 549.032 57.002C552.176 58.938 553.476 61.407 553.881 65.059C557.869 101.083 562.026 137.088 566.128 173.099C570.27 209.455 574.397 245.813 578.564 282.166C578.752 283.81 579.274 285.415 579.95 287.843Z"
                  fill="#F9B61D"
                />
                <path
                  d="M171.483 574.163C170.204 571.496 172.008 569.775 173.21 567.853C214.192 502.339 255.188 436.835 296.199 371.34C296.9 370.22 297.798 369.221 299.25 367.907C302.28 388.44 304.694 409.227 307.026 430.025C307.764 436.608 309.107 443.177 307.946 450.754C286.869 484.844 265.659 517.924 244.973 551.33C240.785 558.092 236.1 562.004 228.115 563.358C209.428 566.528 190.883 570.54 171.483 574.163Z"
                  fill="#F8B51D"
                />
              </svg>
            </div>
          </h1>

          <p className="mx-auto my-4 max-w-4xl text-center text-lg font-semibold !leading-tight md:mb-8 md:text-2xl lg:text-3xl">
            The{' '}
            <span className="text-blue-600 underline decoration-dashed underline-offset-4 dark:text-blue-300">
              best club for SSET students
            </span>{' '}
            to explore the world of technology
            <span>
              {' at '}
              <span className="text-brand-light-red font-bold underline underline-offset-4">
                RMIT University
              </span>
            </span>
            .
          </p>

          <GetStartedButton href="/onboarding" />
        </div>

        <div>
          <div className="bg-brand-light-blue/5 border-brand-light-blue/10 text-brand-light-blue relative mx-auto mt-32 max-w-4xl rounded-lg border p-4 text-center text-lg font-semibold tracking-wide md:text-xl lg:text-2xl">
            <Sparkles className="text-brand-light-yellow absolute -right-3 -top-3 h-8 w-8" />
            <Sparkles className="text-brand-light-yellow absolute -bottom-3 -left-3 h-8 w-8" />
            <span className="text-brand-dark-blue decoration-brand-dark-blue font-bold tracking-wide underline underline-offset-4">
              STRONGER TOGETHER
            </span>{' '}
            is our core value. As a club, we strive to create a community where
            everyone can learn and grow together.
          </div>
          <div className="mx-auto flex items-center justify-center text-center">
            <div className="border-brand-light-red/10 bg-brand-light-red/5 text-brand-dark-red relative mx-4 mb-32 max-w-xl rounded-b-lg border border-t-0 p-4 text-center text-sm font-semibold tracking-wide md:mx-8 md:p-8 md:text-base lg:text-lg">
              <Cpu className="text-brand-light-red absolute -bottom-1 -right-3 h-8 w-8 rotate-12 md:bottom-3 md:right-5" />
              <MemoryStick className="text-brand-light-red absolute -left-5 top-4 h-8 w-8 rotate-12 md:left-2 md:top-3" />
              If you are passionate about technology, you should definitely
              consider being{' '}
              <span className="text-brand-light-red font-bold underline decoration-wavy underline-offset-4">
                a part of us
              </span>{' '}
              to enhance your skills and gain valuable experience.
            </div>
          </div>
        </div>

        <div className="via-foreground/10 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />

        <div className="max-w-4xl text-center">
          <div className="mb-2 text-4xl font-bold">The team</div>
          <div className="bg-foreground/5 border-foreground/10 text-foreground relative mx-auto mb-4 max-w-4xl rounded-lg border p-4 text-center text-lg font-semibold tracking-wide">
            RMIT Neo Culture Tech Club mostly operates technical events,
            workshops, trainings, etc… related to technology. Our target
            students are from the house of{' '}
            <span className="text-brand-light-red font-bold underline underline-offset-4">
              SSET
            </span>
            .
          </div>
          The club has 6 core teams:{' '}
          <span className="font-semibold text-green-500 underline underline-offset-2 dark:text-green-300">
            Finance
          </span>
          ,{' '}
          <span className="font-semibold text-blue-500 underline underline-offset-2 dark:text-blue-300">
            Project Management
          </span>
          ,{' '}
          <span className="font-semibold text-purple-500 underline underline-offset-2 dark:text-purple-300">
            Human Resources
          </span>
          ,{' '}
          <span className="font-semibold text-orange-500 underline underline-offset-2 dark:text-orange-300">
            Marketing
          </span>
          ,{' '}
          <span className="font-semibold text-red-500 underline underline-offset-2 dark:text-red-300">
            External Relations
          </span>
          , with a dedicated{' '}
          <span className="font-semibold text-pink-500 underline underline-offset-2 dark:text-pink-300">
            Executive Board
          </span>{' '}
          to oversee the operations of the club.
        </div>

        <div className="my-4 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className={`flex w-full items-center justify-center rounded-lg border p-2 ${
                member.department === 'Executive Board'
                  ? 'border-pink-500/20 bg-pink-500/5 text-pink-700 dark:border-pink-300/20 dark:bg-pink-300/5 dark:text-pink-100'
                  : member.department === 'Finance'
                    ? 'border-green-500/20 bg-green-500/5 text-green-700 dark:border-green-300/20 dark:bg-green-300/5 dark:text-green-100'
                    : member.department === 'Project Management'
                      ? 'border-blue-500/20 bg-blue-500/5 text-blue-700 dark:border-blue-300/20 dark:bg-blue-300/5 dark:text-blue-100'
                      : member.department === 'Human Resources'
                        ? 'border-purple-500/20 bg-purple-500/5 text-purple-700 dark:border-purple-300/20 dark:bg-purple-300/5 dark:text-purple-100'
                        : member.department === 'Marketing'
                          ? 'border-orange-500/20 bg-orange-500/5 text-orange-700 dark:border-orange-300/20 dark:bg-orange-300/5 dark:text-orange-100'
                          : member.department === 'External Relations'
                            ? 'border-red-500/20 bg-red-500/5 text-red-700 dark:border-red-300/20 dark:bg-red-300/5 dark:text-red-100'
                            : ''
              }`}
            >
              <div className="flex w-full flex-col items-center justify-center">
                <div className="text-foreground text-lg font-bold">
                  {member.name}
                </div>
                <div className="text-sm font-semibold leading-none">
                  {member.role}
                </div>
                <div
                  className={`mt-2 w-full rounded border p-1 text-center text-sm font-semibold ${
                    member.department === 'Executive Board'
                      ? 'border-pink-500/20 bg-pink-500/10 text-pink-500 dark:border-pink-300/20 dark:bg-pink-300/10 dark:text-pink-300'
                      : member.department === 'Finance'
                        ? 'border-green-500/20 bg-green-500/10 text-green-500 dark:border-green-300/20 dark:bg-green-300/10 dark:text-green-300'
                        : member.department === 'Project Management'
                          ? 'border-blue-500/20 bg-blue-500/10 text-blue-500 dark:border-blue-300/20 dark:bg-blue-300/10 dark:text-blue-300'
                          : member.department === 'Human Resources'
                            ? 'border-purple-500/20 bg-purple-500/10 text-purple-500 dark:border-purple-300/20 dark:bg-purple-300/10 dark:text-purple-300'
                            : member.department === 'Marketing'
                              ? 'border-orange-500/20 bg-orange-500/10 text-orange-500 dark:border-orange-300/20 dark:bg-orange-300/10 dark:text-orange-300'
                              : member.department === 'External Relations'
                                ? 'border-red-500/20 bg-red-500/10 text-red-500 dark:border-red-300/20 dark:bg-red-300/10 dark:text-red-300'
                                : ''
                  }`}
                >
                  {member.department}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="via-foreground/10 mt-8 w-full bg-gradient-to-r from-transparent to-transparent p-[1px]" />

        <div className="w-full text-center">
          <div className="mb-4 text-4xl font-bold">Why us?</div>

          <div className="grid w-full gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-lg border border-purple-300/20 bg-purple-300/10 p-4">
              <CalendarHeart className="h-16 w-16 text-purple-500 dark:text-purple-300" />
              <div className="mb-2 mt-1 text-2xl font-semibold text-purple-500 dark:text-purple-300">
                Special Events
              </div>
              <div className="text-purple-500 dark:text-purple-100">
                Events organized to support you find career paths in technology,
                gain deeper insights from company trips and alumni, and join
                coding competitions.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border border-red-300/20 bg-red-300/10 p-4">
              <Network className="h-16 w-16 text-red-500 dark:text-red-300" />
              <div className="mb-2 mt-1 text-2xl font-semibold text-red-500 dark:text-red-300">
                Networking
              </div>
              <div className="text-red-500 dark:text-red-100">
                Events organized to support you find career paths in technology,
                gain deeper insights from company trips and alumni, and join
                coding competitions.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg border border-blue-300/20 bg-blue-300/10 p-4">
              <Telescope className="h-16 w-16 text-blue-500 dark:text-blue-300" />
              <div className="mb-2 mt-1 text-2xl font-semibold text-blue-500 dark:text-blue-300">
                Vision
              </div>
              <div className="text-blue-500 dark:text-blue-100">
                We create an environment not only for students from SSET
                students but also others to learn new knowledge, have fun, and
                expand their network.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
