package bg.elsys.ip.rest;

public class Phone {

	private String imageURL;
	private String manufacturer;
	private String model;
	private String color;
	private String year;
	private String description;
	
	public Phone(String imageURL, String manufacturer, String model, String color, String year, String desc) {
		this.imageURL = imageURL;
		this.manufacturer = manufacturer;
		this.model = model;
		this.color = color;
		this.year = year;
		this.description = desc;
	}
	
	public String getImageURL() {
		return imageURL;
	}
	
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	
	public String getManufacturer() {
		return manufacturer;
	}
	
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	
	public String getModel() {
		return model;
	}
	
	public void setModel(String model) {
		this.model = model;
	}
	
	public String getColor() {
		return color;
	}
	
	public void setColor(String color) {
		this.color = color;
	}
	
	public String getYear() {
		return year;
	}
	
	public void setYear(String year) {
		this.year = year;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}