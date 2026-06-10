import axiosClient from '../utils/axiosClient';

const authApi = {
    // 1. API Đăng ký tài khoản (Dành cho Customer)
    register: (registerData) => {
        // registerData gồm: { email, password, fullName }
        return axiosClient.post('/auth/register', registerData);
    },

    // 2. API Đăng nhập
    login: (loginData) => {
        // loginData gồm: { email, password }
        return axiosClient.post('/auth/login', loginData);
    },

    // 3. API Lấy thông tin user hiện tại đang đăng nhập (Dựa vào Token đính kèm)
    getMe: () => {
        return axiosClient.get('/me');
    },

    // 4. API Tạo tài khoản Staff (Chỉ ADMIN mới gọi được)
    createStaff: (staffData) => {
        // staffData gồm: { email, password, fullName }
        return axiosClient.post('/admin/staffs', staffData);
    }
};

export default authApi;