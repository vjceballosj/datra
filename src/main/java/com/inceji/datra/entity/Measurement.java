package com.inceji.datra.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "measurements")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Measurement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long deviceId;

    private LocalDateTime timestamp;

    private Double voltageL1;
    private Double voltageL2;
    private Double voltageL3;

    private Double currentL1;
    private Double currentL2;
    private Double currentL3;

    private Double activePower;
    private Double reactivePower;
    private Double frequency;
    private Double energyTotal;
}
