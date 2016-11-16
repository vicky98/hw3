package bg.elsys.ip.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("/phones")
public class PhoneResource {
	List<Phone> phones = new ArrayList<>();
	boolean firstTime = true;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getPhones() {
		if (firstTime == true) {
			phones.add(new Phone("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0i072i4Qrtdwdufah94o2bizrTIvNTlgRIlxhk1gz7FohcshOg", "Phone1", "Model1", "White", "2016", "Description1"));
			phones.add(new Phone("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0i072i4Qrtdwdufah94o2bizrTIvNTlgRIlxhk1gz7FohcshOg", "Phone2", "Model2", "Black", "2014", "Description2"));
			phones.add(new Phone("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0i072i4Qrtdwdufah94o2bizrTIvNTlgRIlxhk1gz7FohcshOg", "Phone3", "Model3","Silver", "2013", "Description3"));
			phones.add(new Phone("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0i072i4Qrtdwdufah94o2bizrTIvNTlgRIlxhk1gz7FohcshOg", "Phone4", "Model4", "Gold", "2015", "Description4"));
		
			firstTime = false;
		}
		
		return Response.ok(phones).build();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addPhone(Phone phone) {
		phones.add(phone);
		
		return Response.ok(phone).status(Status.CREATED).build();
	}
}