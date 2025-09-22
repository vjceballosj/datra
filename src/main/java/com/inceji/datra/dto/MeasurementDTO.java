package com.inceji.datra.dto;

import java.time.LocalDateTime;

public record MeasurementDTO(
        Long id,
        Long deviceId,
        LocalDateTime timestamp,
        Double voltageL1,
        Double voltageL2,
        Double voltageL3,
        Double currentL1,
        Double currentL2,
        Double currentL3,
        Double activePower,
        Double reactivePower,
        Double frequency,
        Double energyTotal
) {}
