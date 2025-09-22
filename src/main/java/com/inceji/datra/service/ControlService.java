package com.inceji.datra.service;

import com.inceji.datra.dto.CommandRequestDTO;
import com.inceji.datra.dto.ControlLogDTO;

public interface ControlService {
    ControlLogDTO sendCommand(CommandRequestDTO req);
}

