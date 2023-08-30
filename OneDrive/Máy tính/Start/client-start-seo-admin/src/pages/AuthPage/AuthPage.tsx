/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import styles from './AuthPage.module.scss'
import { doPostLogin } from '../../redux/actions/auth'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LogoWithText from '../../images/LogoWithText.png'
import ModalLoading from '../../components/ModalLoading/ModalLoading'

const AuthPage = () => {
  const [form] = useForm()
  const dispatch = useAppDispatch()
  const { userInfo, isLoading } = useAppSelector((state: RootState) => state.auth)
  const history = useHistory()

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [userInfo])

  return (
    <div className={styles.root}>
      {isLoading && <ModalLoading />}
      <Form form={form} layout='vertical' className={styles.form}>
        <div className={styles.logo}>
          <img src={LogoWithText} alt='logoWithText' />
        </div>

        <div className={styles.title}>Login</div>

        <Form.Item required name='email' label='Email'>
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item required name='password' label='Password'>
          <Input.Password className={styles.input} />
        </Form.Item>

        <Button
          className={styles.btnSubmit}
          onClick={() => {
            dispatch(
              doPostLogin({
                password: form.getFieldValue('password'),
                userName: form.getFieldValue('email')
              })
            )
          }}
        >
          Submit
        </Button>

        <div className={styles.forgotPassword}>Forgot your password?</div>
      </Form>
    </div>
  )
}

export default AuthPage
