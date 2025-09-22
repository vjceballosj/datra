package com.inceji.datra.service.impl;

import com.inceji.datra.dto.MeasurementDTO;
import com.inceji.datra.entity.Measurement;
import com.inceji.datra.repository.MeasurementRepository;
import com.inceji.datra.service.MeasurementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

//import org.springframework.data.domain.PageRequest;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MeasurementServiceImpl implements MeasurementService {

    private final MeasurementRepository measurementRepository;

    @Override
    public MeasurementDTO getLast(Long deviceId) {
        return measurementRepository.findByDeviceIdOrderByTimestampDesc(deviceId)
                .stream()
                .findFirst()
                .map(this::toDTO)
                .orElse(null);
    }

    @Override
    public List<MeasurementDTO> getHistory(Long deviceId, int page, int size) {
        return measurementRepository.findByDeviceIdOrderByTimestampDesc(deviceId)
                .stream()
                .skip((long) page * size)
                .limit(size)
                .map(this::toDTO)
                .toList();
    }

    private MeasurementDTO toDTO(Measurement m) {
        return new MeasurementDTO(
                m.getId(),
                m.getDeviceId(),
                m.getTimestamp(),
                m.getVoltageL1(),
                m.getVoltageL2(),
                m.getVoltageL3(),
                m.getCurrentL1(),
                m.getCurrentL2(),
                m.getCurrentL3(),
                m.getActivePower(),
                m.getReactivePower(),
                m.getFrequency(),
                m.getEnergyTotal()
        );
    }
}
