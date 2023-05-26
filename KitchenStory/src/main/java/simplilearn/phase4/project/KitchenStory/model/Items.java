package simplilearn.phase4.project.KitchenStory.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Items {

	@Id
	private int id;
	private String product;
	private String category;
	private String price;
	private String available;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getAvailable() {
		return available;
	}
	public void setAvailable(String available) {
		this.available = available;
	}
	
	public Items(int id, String product, String category, String price, String available) {
		super();
		this.id = id;
		this.product = product;
		this.category = category;
		this.price = price;
		this.available = available;
	}
	
	public Items() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "Items [id=" + id + ", product=" + product + ", category=" + category + ", price=" + price
				+ ", available=" + available + "]";
	}
	
	
}
