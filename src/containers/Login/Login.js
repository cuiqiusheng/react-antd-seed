/**
 * @summary 登录
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'

import style from './style.scss'

const { Item } = Form

class Login extends Component {

  static propTypes = {
    form: PropTypes.object.isRequired,
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={style.login}>
        <Form>
          <Item
            label="用户名"
          >
            {getFieldDecorator('username')(
              <Input />
            )}
          </Item>
          <Item
            label="密码"
          >
            {getFieldDecorator('password')(
              <Input type="password" />
            )}
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Login)
