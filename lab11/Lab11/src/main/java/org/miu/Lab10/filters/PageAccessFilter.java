package org.miu.Lab10.filters;

import java.io.IOException;

import javax.servlet.DispatcherType;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

@WebFilter(dispatcherTypes = {
		DispatcherType.REQUEST, DispatcherType.FORWARD
}, description = "Counts the number of times pages have been accessed in the web application", urlPatterns = {"/", "/*"})
public class PageAccessFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		ServletContext context = request.getServletContext();
		int totalHitCount = (Integer)context.getAttribute("totalHitCount");
		totalHitCount++;
		context.setAttribute("totalHitCount", totalHitCount);
		chain.doFilter(request, response);
	}
	
	@Override
	public void init(FilterConfig config) throws ServletException {
		int totalHitCount = 0;
		config.getServletContext().setAttribute("totalHitCount", totalHitCount);
	}
}