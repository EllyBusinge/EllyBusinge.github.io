package org.miu.Lab13.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.miu.Lab13.model.Message;

/**
 * Simple Message repository using an array list as store for messages
 * @author EllyPc
 *
 */
public class MessageRepository {
	
	private static MessageRepository repository = null; 

	private List<Message> messages;
	
	public MessageRepository() {
		super();
		this.messages = new ArrayList<Message>();
	}

	public static MessageRepository getInstance() { 
        if (repository == null) 
        	repository = new MessageRepository(); 
  
        return repository; 
    }

	public List<Message> getMessages() {
		return messages;
	}
	
	public void addMessage(Message message) {
		messages.add(message);
	}
	
	public List<Message> filterMessages(String searchString) {
		return messages.stream().filter(x -> x.getFullName().contains(searchString) 
				|| x.getCategory().contains(searchString)
				|| x.getGender().contains(searchString)
				|| x.getMessage().contains(searchString))
		.collect(Collectors.toList());
	}
}