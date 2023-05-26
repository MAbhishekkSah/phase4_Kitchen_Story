package simplilearn.phase4.project.KitchenStory.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import simplilearn.phase4.project.KitchenStory.model.Items;

@Repository
public interface ItemsRepo extends JpaRepository<Items,Integer> {

}
