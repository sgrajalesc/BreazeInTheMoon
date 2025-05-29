// src/dto/update-notificacion.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificacionDto } from './create-notificacion.dto';

export class UpdateNotificacionDto extends PartialType(CreateNotificacionDto) {}
