insert into public.workspace_presets (name)
values ('ALL'),
    ('GENERAL'),
    ('PHARMACY'),
    ('EDUCATION');
-- Populate handles
insert into public.handles (value)
values ('user1'),
    ('user2'),
    ('user3'),
    ('prototype-all'),
    ('prototype-general'),
    ('prototype-pharmacy'),
    ('prototype-school');
-- Populate users
insert into public.users (id, handle, display_name, email)
values (
        '00000000-0000-0000-0000-000000000001',
        'user1',
        'Random User 1',
        'user1@tuturuuu.com'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'user2',
        'Random User 2',
        'user2@tuturuuu.com'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'user3',
        'Random User 3',
        'user3@tuturuuu.com'
    );
-- Populate workspaces
insert into public.workspaces (id, name, handle, preset)
values (
        '00000000-0000-0000-0000-000000000001',
        'Prototype All',
        'prototype-all',
        'ALL'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Prototype General',
        'prototype-general',
        'GENERAL'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Prototype Pharmacy',
        'prototype-pharmacy',
        'PHARMACY'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        'Prototype School',
        'prototype-school',
        'EDUCATION'
    );
-- Populate workspace_members
insert into public.workspace_members (user_id, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000004'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000004'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        '00000000-0000-0000-0000-000000000004'
    );
-- Populate workspace_teams
insert into public.workspace_teams (id, name, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Alpha',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Beta',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Lora',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        'Kora',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000005',
        'Mora',
        '00000000-0000-0000-0000-000000000002'
    );
-- Populate documents
insert into public.workspace_documents (name, ws_id)
values (
        'Document 1',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Document 2',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Document 3',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        'Document 4',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        'Document 5',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        'Document 6',
        '00000000-0000-0000-0000-000000000004'
    );
-- Populate boards
insert into public.workspace_boards (id, name, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Board 1',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Board 2',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Board 3',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        'Board 4',
        '00000000-0000-0000-0000-000000000004'
    );
-- Populate wallets
insert into public.workspace_wallets (id, name, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Wallet 1',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Wallet 2',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Wallet 3',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        'Wallet 4',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000005',
        'Wallet 5',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000006',
        'Wallet 6',
        '00000000-0000-0000-0000-000000000004'
    );
-- Populate transactions
insert into public.wallet_transactions (description, amount, wallet_id)
values (
        'Transaction 1',
        100000,
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Transaction 2',
        200000,
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Transaction 3',
        300000,
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        'Transaction 4',
        400000,
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        'Transaction 5',
        500000,
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        'Transaction 6',
        600000,
        '00000000-0000-0000-0000-000000000004'
    );
-- Populate inventory product categories
insert into public.product_categories (id, name, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Thuốc',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Dụng cụ',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Vật tư',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        'Đồ ăn',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000005',
        'Đồ uống',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000006',
        'Đồ chơi',
        '00000000-0000-0000-0000-000000000003'
    );
-- Populate inventory units
insert into public.inventory_units (id, name, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Vỉ',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Viên',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Hủ',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        'Hộp',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000005',
        'Lọ',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000006',
        'Thùng',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000007',
        'Cái',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000008',
        'Chiếc',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000009',
        'Cây',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000010',
        'Bịch',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000011',
        'Chai',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000012',
        'Lon',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000013',
        'Bao',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000014',
        'Gói',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000015',
        'Bình',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000016',
        'Bộ',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000017',
        'Ống',
        '00000000-0000-0000-0000-000000000003'
    );
-- Populate workspace products
insert into public.workspace_products (id, name, manufacturer, category_id, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Thuốc trị đau',
        'ABC, Inc.',
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Thuốc trị viêm',
        'ABC, Inc.',
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Thuốc trị bệnh',
        'ABC, Inc.',
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        'Thuốc hạ sốt',
        'ABC, Inc.',
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000005',
        'Thuốc trị viêm họng',
        'ABC, Inc.',
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000006',
        '7-up',
        'Coca-Cola',
        '00000000-0000-0000-0000-000000000005',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000007',
        'Pepsi',
        'PepsiCo',
        '00000000-0000-0000-0000-000000000005',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000008',
        'Lego',
        'Lego Group',
        '00000000-0000-0000-0000-000000000006',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000009',
        'Bánh kẹo',
        'ABC, Inc.',
        '00000000-0000-0000-0000-000000000004',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000010',
        'Bánh mì',
        'Tous les Jours',
        '00000000-0000-0000-0000-000000000004',
        '00000000-0000-0000-0000-000000000003'
    );
-- Populate inventory suppliers
insert into public.inventory_suppliers (id, name, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Nhà thuốc Long Châu',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Nhà thuốc An Khang',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        'Chợ thuốc',
        '00000000-0000-0000-0000-000000000003'
    );
-- Populate inventory warehouses
insert into public.inventory_warehouses (id, name, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Kho nhà thuốc',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Kho phụ',
        '00000000-0000-0000-0000-000000000003'
    );
-- Populate transaction categories
insert into public.transaction_categories (id, name, is_expense, ws_id)
values (
        '00000000-0000-0000-0000-000000000001',
        'Nhập hàng',
        true,
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        'Bán hàng',
        false,
        '00000000-0000-0000-0000-000000000003'
    );
-- Populate vitals
insert into public.healthcare_vitals (id, ws_id, name, unit)
values (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003',
        'Nhiệt độ',
        '°C'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000003',
        'Chiều cao',
        'cm'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        '00000000-0000-0000-0000-000000000003',
        'Cân nặng',
        'kg'
    ),
    (
        '00000000-0000-0000-0000-000000000004',
        '00000000-0000-0000-0000-000000000003',
        'Huyết áp',
        'mmHg'
    ),
    (
        '00000000-0000-0000-0000-000000000005',
        '00000000-0000-0000-0000-000000000003',
        'Nhịp tim',
        'lần/phút'
    ),
    (
        '00000000-0000-0000-0000-000000000006',
        '00000000-0000-0000-0000-000000000003',
        'Nhịp thở',
        'lần/phút'
    );
-- Populate diagnoses
insert into public.healthcare_diagnoses (id, ws_id, name, description)
values (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003',
        'Sốt',
        'Sốt là tình trạng nhiệt độ cơ thể cao hơn 37,5°C.'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000003',
        'Đau bụng',
        'Đau bụng là tình trạng đau ở vùng bụng.'
    ),
    (
        '00000000-0000-0000-0000-000000000003',
        '00000000-0000-0000-0000-000000000003',
        'Đau đầu',
        'Đau đầu là tình trạng đau ở vùng đầu.'
    );
-- Populate vital_groups
insert into public.healthcare_vital_groups (id, ws_id, name, description)
values (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003',
        'Sức khỏe',
        'Nhóm các chỉ số sức khỏe của bệnh nhân.'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000003',
        'Tình trạng',
        'Nhóm các chỉ số tình trạng của bệnh nhân.'
    );
-- Populate vital_group_vitals
insert into public.vital_group_vitals (group_id, vital_id)
values (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000002'
    ),
    (
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000004'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000005'
    ),
    (
        '00000000-0000-0000-0000-000000000002',
        '00000000-0000-0000-0000-000000000006'
    );
-- Populate workspace_users
insert into public.workspace_users (
        name,
        email,
        phone,
        birthday,
        gender,
        ethnicity,
        guardian,
        address,
        national_id,
        ws_id
    )
values (
        'Nguyen Van A',
        'nguyenvana@gmail.com',
        '0909090808',
        '1997-02-03',
        'MALE',
        'Kinh',
        'VHP',
        'VHP Address',
        '123456789',
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        'Nguyen Van B',
        'nguyenvanb@gmail.com',
        '0909090808',
        '2001-06-02',
        'FEMALE',
        'Kinh',
        NULL,
        'q. Tân Bình, tp. Hồ Chí Minh',
        NULL,
        '00000000-0000-0000-0000-000000000003'
    ),
    (
        'Nguyễn Văn C',
        'nguyenvanc@gmail.com',
        '0912345678',
        '1992-03-29',
        'MALE',
        'Kinh',
        NULL,
        NULL,
        NULL,
        '00000000-0000-0000-0000-000000000003'
    );