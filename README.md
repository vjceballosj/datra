📘 Arquitectura general:

Capa física:
PM130 Plus (medidor) ←RS-485→ Arduino Opta PRO (Gateway)

Capa lógica / red:
Arduino Opta PRO ←Ethernet / Modbus TCP→ Backend Java Spring Boot

Capa aplicación:
Spring Boot expone API REST para que el frontend (Angular) lea las mediciones en tiempo real

🧠 Entonces el backend debe:

Actuar como cliente Modbus TCP, conectándose al Arduino OPTA PRO (que funge como servidor Modbus TCP).

Leer Holding Registers / Input Registers según las direcciones que el Opta expone.

Transformar esas lecturas en variables (por ejemplo, “V L1”, “I L2”, etc.).

Entregarlas mediante un servicio REST al frontend Angular.
