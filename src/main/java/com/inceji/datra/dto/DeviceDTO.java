package com.inceji.datra.dto;

import java.time.LocalDateTime;

public record DeviceDTO(
        Long id,
        String deviceId,
        String name,
        String type,
        LocalDateTime lastSeen
) {}
