package org.miu.Lab13;

import java.util.List;

import org.miu.Lab13.model.Message;
import org.miu.Lab13.repository.MessageRepository;

public class TestClass {

	public static void main(String[] args) {
		Message message1 = new Message("Elly Businge1", "Male", "Z", "This is a test");
		Message message2 = new Message("Elly Businge2", "Male", "Z", "This is a test");
		Message message3 = new Message("Elly Businge3", "Male", "Z", "This is a test");
		Message message4 = new Message("Elly Busing4", "Male", "Z", "This is a test");
		
		MessageRepository repo = MessageRepository.getInstance();
		repo.addMessage(message1);
		repo.addMessage(message2);
		repo.addMessage(message3);
		repo.addMessage(message4);
		
		List<Message> messages = repo.getMessages();
		
		for (Message message : messages) {
			System.out.print("Messages - " + message + "\n");
		}
		
	}
}