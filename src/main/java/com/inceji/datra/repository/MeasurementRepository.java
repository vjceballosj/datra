package com.inceji.datra.repository;

import com.inceji.datra.entity.Measurement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MeasurementRepository extends JpaRepository<Measurement, Long> {
    List<Measurement> findByDeviceIdOrderByTimestampDesc(Long deviceId);
}
