package com.inceji.datra.service.impl;

import com.inceji.datra.dto.CommandRequestDTO;
import com.inceji.datra.dto.ControlLogDTO;
import com.inceji.datra.entity.ControlLog;
import com.inceji.datra.enums.CommandStatus;
import com.inceji.datra.repository.ControlLogRepository;
import com.inceji.datra.service.ControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ControlServiceImpl implements ControlService {

    private final ControlLogRepository controlLogRepository;

    @Override
    public ControlLogDTO sendCommand(CommandRequestDTO req) {
        ControlLog log = ControlLog.builder()
                .deviceId(req.deviceId())
                .command(req.command())
                .status(CommandStatus.PENDING) // luego se actualiza tras ejecutar
                .timestamp(LocalDateTime.now())
                .build();

        log = controlLogRepository.save(log);

        return new ControlLogDTO(
                log.getId(),
                log.getDeviceId(),
                log.getCommand(),
                log.getStatus().name(),
                log.getTimestamp()
        );
    }
}

