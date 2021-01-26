## react 组件写法 + Hooks

##### 记录个例子，以后写的话作为参考。

```js
import {
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Modal,
  message,
  Spin,
} from "antd";
import React, { useEffect, useState, useRef } from "react";
import { inject, observer } from "mobx-react";
import { CheckOutlined, BarcodeOutlined } from "@ant-design/icons";
import { Tag, Divider } from "antd";
import "./pay.less";
import { number_format } from "../../common/utils/utils";

const WxPay = (props) => {
  const { store } = props;
  const [form] = Form.useForm();

  const formRef = useRef();

  let [subName, setSubName] = useState("提交");
  let [medicineUnitForm, setMedicineUnitForm] = useState("");
  let [fetching, setFetching] = useState(false);

  useEffect(() => {
    store.payForm = form;
  }, []);

  useEffect(() => {
    let str = store.canHandleMedicine ? "修改" : "新增";
    setSubName(str);
  }, [store.canHandleMedicine]);

  /**
   * 付款
   */
  const onFinish = async () => {
    const values = await formRef.current.validateFields();
    console.log("付款", values);
    await store.doPay(values);
    return true;
  };

  const closeModal = () => {
    store.payVisible = false;
    store.payTime = null;
    store.paying = false;
  };

  return (
    <Modal
      title="支付订单"
      visible={store.payVisible}
      onCancel={(e) => closeModal()}
      footer={null}
      width="600px"
    >
      <Spin spinning={store.paying} size={"large"} tip={"正在支付中请稍等..."}>
        <Form
          form={form}
          name="control-hooks"
          className="form-padding-border"
          ref={formRef}
          onFinish={onFinish}
        >
          <div className={"pay"}>
            <Divider orientation="left">
              <div>
                <span className={"address-icon"}>
                  {" "}
                  <CheckOutlined />
                </span>{" "}
                <Tag className={"address-text"} color="orange">
                  订单地址保存成功
                </Tag>
              </div>
            </Divider>
            <div className={"orderTitle"}>
              <span>￥</span>
              <span>{number_format(store.orderAmount, 2)} </span>
            </div>
            <div className={"barcode"}>
              <BarcodeOutlined />
            </div>
            <Form.Item
              name="wxPayAuthCode"
              rules={[{ required: true, message: "付款码不能为空" }]}
            >
              <Input
                id={"wxPayAuthCode"}
                // style={{width:'380px',paddingLeft:"20px",    padding: '6px',border: '1px solid #eee'}}
                key={new Date().getTime()}
                prefix="微信付款码"
                size="large"
                bordered={true}
                placeholder={"请顾客出示微信付款码进行支付"}
                onPressEnter={onFinish}
                autoFocus
              />
            </Form.Item>
            <Form.Item name="orderAmount" hidden>
              <Input prefix="￥" suffix="RMB" disabled />
            </Form.Item>
            <Form.Item name="orderCode" hidden>
              <Input type={"hidden"} value={store.order?.orderCode} />
            </Form.Item>
            <div className={"remark"}>
              说明：订单支付成功后，处方将推送到调剂中心
            </div>
            <Button onClick={store.clearPayTimeAndSetFocus}>重新扫码</Button>
            <Button
              type="primary"
              onClick={onFinish}
              id="subButton"
              className="button-focus"
            >
              {"收款"}
            </Button>
          </div>
        </Form>
      </Spin>
    </Modal>
  );
};
export default inject("store")(observer(WxPay));
```
