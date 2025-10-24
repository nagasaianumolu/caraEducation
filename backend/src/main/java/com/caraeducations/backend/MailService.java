package com.caraeducations.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendContactMail(ContactSubmission contact) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("nagasaianumolu@gmail.com");  
            message.setSubject("New Contact Form Submission");
            message.setText(
                "Name: " + contact.getName() +
                "\nPhone: " + contact.getPhone() +
                "\nMessage: " + contact.getMessage()
            );
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendApplyMail(ApplySubmission apply) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("nagasaianumolu@gmail.com");  
            message.setSubject("New Apply Form Submission");
            message.setText(
                "Name: " + apply.getName() +
                "\nEmail: " + apply.getEmail() +
                "\nPhone: " + apply.getPhone() +
                "\nCourse: " + apply.getCourse() +
                "\nMessage: " + apply.getMessage()
            );
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
