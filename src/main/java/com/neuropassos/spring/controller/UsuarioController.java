package com.neuropassos.spring.controller;

import com.neuropassos.spring.model.Usuario;
import com.neuropassos.spring.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Usuario usuario) {
        Optional<Usuario> user = usuarioRepository.findByEmailAndSenha(
                usuario.getEmail(), usuario.getSenha()
        );
        return user.isPresent();
    }

    @PostMapping("/cadastro")
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
