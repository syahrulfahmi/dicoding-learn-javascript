class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`)
    }
}

class WhatsAppService extends MailService {
    sendBroadCast(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver)
        }
    }
}

class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver)
        }, delay);
    }
}

const whatsAppService = new WhatsAppService("085812345324")
whatsAppService.sendMessage("Halo pesan dari whatsapp", "Dani")

const emailService = new EmailService("hello@mail.com")
emailService.sendDelayedMessage("Hello pesan dari email", "world@mail.com", 1000)