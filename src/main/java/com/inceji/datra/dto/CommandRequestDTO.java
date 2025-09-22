package com.inceji.datra.dto;

public record CommandRequestDTO(
        Long deviceId,
        String command
) {}
