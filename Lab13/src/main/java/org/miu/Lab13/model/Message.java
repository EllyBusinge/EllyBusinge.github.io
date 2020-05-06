package org.miu.Lab13.model;

import java.io.Serializable;

/**
 * Model representation of a contact Message From Users
 * @author EllyPc
 *
 */
public class Message implements Serializable {

	private static final long serialVersionUID = -2787172586816073136L;
	
	private int messageId;
	
	private String fullName;
	
	private String gender;
	
	private String category;
	
	private String message;

	public Message() {
		super();
	}

	public Message(String fullName, String gender, String category, String message) {
		super();
		this.fullName = fullName;
		this.gender = gender;
		this.category = category;
		this.message = message;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getMessageId() {
		return messageId;
	}

	public void setMessageId(int messageId) {
		this.messageId = messageId;
	}
}