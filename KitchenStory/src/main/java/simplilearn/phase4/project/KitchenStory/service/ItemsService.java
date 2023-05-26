package simplilearn.phase4.project.KitchenStory.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import simplilearn.phase4.project.KitchenStory.model.Items;
import simplilearn.phase4.project.KitchenStory.repo.ItemsRepo;

@Service
public class ItemsService {

	@Autowired
	private ItemsRepo itemsRepo;
	
	public List<Items> getAllItems()
	{
		return itemsRepo.findAll();
	}
	public Optional<Items> getItemsById(int id)
	{
		return itemsRepo.findById(id);
	}
	public Items saveItems(Items item)
	{
		return itemsRepo.save(item);
	}
	
	public String deleteItemsById(int id)
	{
		String isDeleted = "";
		try {
			itemsRepo.deleteById(id);
			isDeleted = "Deleted";
		}
		catch(Exception e) {
			isDeleted = "Not Deleted";
		}
		return isDeleted;
	}
	
	public Items updateItem(Items item, int id)
	{
		if(itemsRepo.findById(id).isPresent())
		{
			Items updatedItem = itemsRepo.findById(id).get();
			updatedItem.setId(id);
			updatedItem.setProduct(item.getProduct());
			updatedItem.setPrice(item.getPrice());
			updatedItem.setCategory(item.getCategory());
			updatedItem.setAvailable(item.getAvailable());
			return itemsRepo.save(updatedItem);
		}
		else {
			return null;
		}
	}
}
