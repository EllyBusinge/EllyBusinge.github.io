package org.miu.edu.tags;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class CurrentDateTimeTag extends SimpleTagSupport {

	String color;
	
	String size;
	
	@Override
	public void doTag() throws JspException, IOException {
		super.doTag();
		
		LocalDateTime dtNow = LocalDateTime.now();

		JspWriter out = getJspContext().getOut();
		
		if (color != null && size != null) 
			out.write(String.format("<span style='color:%s; font-size:%s;>%s</span>", color, size, dtNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"))));
		else {
			if (color != null) 
				out.write(String.format("<span style='color:%s;'>%s</span>", color, dtNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"))));
			if (size != null) 
				out.write(String.format("<span style='font-size:%s;'>%s</span>", size, dtNow.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"))));
		}
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}
}