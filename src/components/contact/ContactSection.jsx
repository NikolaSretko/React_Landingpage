import { useState } from 'react';
import { Form, Input, Button, message, Typography, Divider } from 'antd';
import { motion } from 'framer-motion';
import { SendOutlined, UserOutlined, MailOutlined, FileTextOutlined } from '@ant-design/icons';
import './ContactSection.scss';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactSection = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = (values) => {
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      message.success('Ihre Nachricht wurde erfolgreich gesendet!');
      form.resetFields();
      setSubmitting(false);
    }, 1500);
    
    // In a real implementation, you would use EmailJS or another service
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_PUBLIC_KEY')
    //   .then((result) => {
    //     message.success('Ihre Nachricht wurde erfolgreich gesendet!');
    //     form.resetFields();
    //   }, (error) => {
    //     message.error('Es gab ein Problem beim Senden Ihrer Nachricht.');
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setSubmitting(false);
    //   });
  };

  return (
    <motion.section 
      className="contactContainer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Title level={2} className="section-title">KONTAKT</Title>
      
      <div className="contact-content">
        <div className="contact-info">
          <Paragraph className="contact-intro">
            Haben Sie ein Projekt im Sinn oder benötigen Sie individuelle Web-Lösungen? 
            Ich freue mich darauf, von Ihnen zu hören und Ihnen bei Ihren Anforderungen zu helfen.
          </Paragraph>
          
          <Divider />
          
          <Paragraph className="contact-method">
            <MailOutlined className="icon" /> nikola.sretkovic99@gmail.com
          </Paragraph>
          
          <Paragraph className="availability">
            <span>Verfügbarkeit:</span> Montag bis Freitag, 9:00 - 18:00 Uhr
          </Paragraph>
          
          <Paragraph className="response-time">
            <span>Antwortzeit:</span> Innerhalb von 24 Stunden
          </Paragraph>
        </div>
        
        <div className="contact-form">
          <Form
            form={form}
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            className="form"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Bitte geben Sie Ihren Namen ein' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Ihr Name" 
                size="large" 
              />
            </Form.Item>
            
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Bitte geben Sie Ihre E-Mail ein' },
                { type: 'email', message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Ihre E-Mail" 
                size="large" 
              />
            </Form.Item>
            
            <Form.Item
              name="subject"
              rules={[{ required: true, message: 'Bitte geben Sie einen Betreff ein' }]}
            >
              <Input 
                prefix={<FileTextOutlined />} 
                placeholder="Betreff" 
                size="large" 
              />
            </Form.Item>
            
            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Bitte geben Sie Ihre Nachricht ein' }]}
            >
              <TextArea 
                placeholder="Ihre Nachricht" 
                rows={5} 
                size="large" 
              />
            </Form.Item>
            
            <Form.Item className="form-submit">
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large"
                loading={submitting}
                icon={<SendOutlined />}
                className="submit-btn"
              >
                Nachricht senden
              </Button>
            </Form.Item>
            
            <Paragraph className="form-privacy">
              Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet.
            </Paragraph>
          </Form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;