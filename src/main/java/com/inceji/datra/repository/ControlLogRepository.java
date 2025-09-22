package com.inceji.datra.repository;

import com.inceji.datra.entity.ControlLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ControlLogRepository extends JpaRepository<ControlLog, Long> {
    List<ControlLog> findByDeviceIdOrderByTimestampDesc(Long deviceId);
}