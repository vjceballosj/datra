package com.inceji.datra.service;

import com.inceji.datra.dto.MeasurementDTO;

import java.util.List;

public interface MeasurementService {
    MeasurementDTO getLast(Long deviceId);
    List<MeasurementDTO> getHistory(Long deviceId, int page, int size);
}
