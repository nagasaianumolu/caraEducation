package com.caraeducations.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/forms")
@CrossOrigin(origins = "http://localhost:5173")
public class FormController {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private ApplyRepository applyRepository;

    @Autowired
    private MailService mailService;

    // Contact form endpoint
    @PostMapping("/contact")
    public ContactSubmission submitContact(@RequestBody ContactSubmission contact) {
        // Save contact form data to DB
        ContactSubmission saved = contactRepository.save(contact);

        // Send email notification
        mailService.sendContactMail(saved);

        return saved;
    }

    // Apply form endpoint
    @PostMapping("/apply")
    public ApplySubmission submitApply(@RequestBody ApplySubmission apply) {
        // Save apply form data to DB
        ApplySubmission saved = applyRepository.save(apply);

        // Send email notification
        mailService.sendApplyMail(saved);

        return saved;
    }

    // Test endpoint
    @GetMapping("/test")
    public String test() {
        return "✅ Form API running successfully!";
    }
}
