const USERS = [
    {
        id: 1,
        nama: "Grand",
        email: "admin@gmail.com",
        password: "12345678"
    }
];

export const login = (req, res) => {
    const { email, password } = req.body;

    // 1. Validasi input
    if (!email || !password) {
        return res.status(400).json({
            status: false,
            message: "Email atau password required"
        });
    }

    // 2. Cari user berdasarkan email dan password
    const user = USERS.find((u) => u.email === email && u.password === password);

    // 3. Jika user tidak ditemukan
    if (!user) {
        return res.status(401).json({
            status: false,
            message: "Invalid credential"
        });
    }

    // 4. Jika login berhasil
    return res.status(200).json({
        status: true,
        message: "Login success",
        data: {
            id: user.id,
            name: user.nama, // Menyesuaikan dengan properti 'nama' di USERS
            email: user.email,
        },
        token: `jwt-token-123-${user.id}-${Date.now()}`
    });
};