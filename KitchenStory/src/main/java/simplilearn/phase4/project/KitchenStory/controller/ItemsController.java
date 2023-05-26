package simplilearn.phase4.project.KitchenStory.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import simplilearn.phase4.project.KitchenStory.model.Items;
import simplilearn.phase4.project.KitchenStory.service.ItemsService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ItemsController {
	
	@Autowired
	private ItemsService service;
	
	@GetMapping("/getAllItems")
	public List<Items> getItemsList()
	{
		return service.getAllItems();
	}

	@GetMapping("/getItem/{id}")
	public Items getItemsById(@PathVariable int id)
	{
		return service.getItemsById(id).get();
	}
	
	@PostMapping("/saveItems")
	public Items saveItem(@RequestBody Items item)
	{
		return service.saveItems(item);
	}
	
	@DeleteMapping("/deleteItem/{id}")
	public Items deleteItems(@PathVariable int id)
	{
		String response = service.deleteItemsById(id);
		if("Deleted".equals(response))
		{
			return null;
		}
		else
		{
			return null;
		}
	}
	
	@PutMapping("/updateItem/{id}")
	public Items updateItems(@RequestBody Items item, @PathVariable int id)
	{
		Items items = service.getItemsById(id).get();
		if(items != null)
		{
			return service.updateItem(item, id);
		}
		else
		{
			return null;
		}
	}
}
