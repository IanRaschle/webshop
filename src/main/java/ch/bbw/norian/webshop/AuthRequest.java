package ch.bbw.norian.webshop;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
public class AuthRequest {
    @NotNull
    @Length(min = 2, max = 50)
    private String username;

    @NotNull
    @Length(min = 5, max = 10)
    private String password;
}
