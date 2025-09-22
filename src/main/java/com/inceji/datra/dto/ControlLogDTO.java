package com.inceji.datra.dto;

import java.time.LocalDateTime;

public record ControlLogDTO(
        Long id,
        Long deviceId,
        String command,
        String status,
        LocalDateTime timestamp
) {}
