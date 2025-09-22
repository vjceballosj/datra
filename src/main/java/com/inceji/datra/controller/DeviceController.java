package com.inceji.datra.controller;

import com.inceji.datra.dto.*;
import com.inceji.datra.service.MeasurementService;
import com.inceji.datra.service.ControlService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class DeviceController {

    private final MeasurementService measurementService;
    private final ControlService controlService;

    @GetMapping("/devices/{id}/last")
    public ResponseEntity<MeasurementDTO> last(@PathVariable Long id) {
        var last = measurementService.getLast(id);
        return last == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(last);
    }

    @GetMapping("/devices/{id}/history")
    public List<MeasurementDTO> history(@PathVariable Long id,
                                        @RequestParam(defaultValue = "0") int page,
                                        @RequestParam(defaultValue = "50") int size) {
        return measurementService.getHistory(id, page, size);
    }

    @PostMapping("/control")
    public ResponseEntity<ControlLogDTO> control(@RequestBody CommandRequestDTO req) {
        var res = controlService.sendCommand(req);
        return ResponseEntity.ok(res);
    }
}

