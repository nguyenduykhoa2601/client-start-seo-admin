import { memo } from 'react'

import styles from './FormOrderDetail.module.scss'
import { useForm } from 'antd/lib/form/Form'
import { Form, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

const FormOrderDetail = () => {
  const [form] = useForm()

  return (
    <div className={styles.root}>
      <Form form={form} layout='vertical'>
        <div className={styles.blockInput}>
          <Form.Item className={styles.formItem} required={true} name='location' label='Location'>
            <Input className={styles.input} size='large' />
          </Form.Item>

          <Form.Item className={styles.formItem} required={true} name='department' label='Department'>
            <Input className={styles.input} size='large' />
          </Form.Item>

          <Form.Item className={styles.formItem} required={true} name='date' label='Date Required'>
            <Input className={styles.input} size='large' />
          </Form.Item>
        </div>

        <div className={styles.desc}>
          <Form.Item className={styles.formItem} required={true} name='desc' label='Order Description'>
            <TextArea rows={4} size='large' />
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default memo(FormOrderDetail)
