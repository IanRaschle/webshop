package ch.bbw.norian.webshop;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "products", path = "products")
interface ProductRepository extends PagingAndSortingRepository<Product, Long> {
    @RestResource
    List<Product> findAll();

    @RestResource
    Product findById(@Param("id") Long id);
}
