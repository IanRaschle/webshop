package ch.bbw.norian.webshop;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    public String title;
    @Column(length = 3000)
    public String description;
    public String category;
    public Double price;
    public Integer remaining;
    public Double rating;
    @Column(length = 600)
    public String url;

}
