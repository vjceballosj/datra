package com.inceji.datra.entity;

import com.inceji.datra.enums.CommandStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "control_logs")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ControlLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long deviceId;

    @Column(nullable = false)
    private String command;

    @Enumerated(EnumType.STRING)
    private CommandStatus status;

    private LocalDateTime timestamp;
}
