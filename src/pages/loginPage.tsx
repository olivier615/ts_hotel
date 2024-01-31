import axios from 'axios'
import showSwal from '../libs/showSwal'
import waitAndNavigate from '../libs/waitAndNavigate'
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { Input } from '../components'
import { userLoginForm } from '../interfaces/User'
import { Link } from 'react-router-dom'

const api = import.meta.env.VITE_API_LINK

const LoginPage = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    // 錯誤驗證時機
    mode: 'onTouched',
  });
  const onSubmit = async (data: any) => {
    const { email, password } = data
    const userData: userLoginForm = {
      email,
      password
    }
    await axios.post(
      `${api}api/v1/user/login`, userData
    )
    .then(res => {
      showSwal('登入成功', 'success')
      waitAndNavigate(navigate, '/', 2000)
    })
    .catch(err => {
      const { message } = err.response.data
      showSwal(message, 'warning')
    })

  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center loginPage">
          <div className="col-12 col-md-5">
            <div className="d-flex flex-column">
              <div className="mb-4">
                <p className="text-primary">享樂酒店，誠摯歡迎</p>
                <p className="fs-1">立即開始旅程</p>
              </div>
              <form action='' onSubmit={handleSubmit(onSubmit)}>
                <Input
                  register={register}
                  errors={errors}
                  id="email"
                  labelText="電子信箱"
                  type="email"
                  placeholder="hello@exsample.com"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入 Email'
                    },
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Email 格式不正確'
                    }
                  }}
                />
                <Input
                  register={register}
                  errors={errors}
                  id="password"
                  labelText="密碼"
                  type="password"
                  placeholder="請輸入密碼"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入密碼'
                    }
                  }}
                />
                <div className="d-flex justify-content-between">
                  <div className="form-check">
                    <input id="checkList1" type="checkbox"
                      className="form-check-input"
                      name="like" value='記住帳號' />
                    <label className='form-check-label text-light' htmlFor="checkList1">記住帳號</label>
                  </div>
                  <a href="" className="text-primary" style={{ textDecoration: 'underline' }}>忘記密碼?</a>
                </div>
                <div className="d-flex mt-3">
                  <button type="submit" className="btn btn-primary w-100">會員登入</button>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <p>沒有會員嗎?</p>
                  <Link to="/member/register" className="text-primary" style={{ textDecoration: 'underline' }}>前往註冊</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage