#!/usr/bin/env node

import { Clirio } from 'clirio';
import { container } from 'tsyringe';
import { WeatherModule } from './modules/weather/weather.module';
import { MathModule } from './modules/math/math.module';
import { CommonPipe } from './pipes';
import { CommonFilter } from './filters';

export const bootstrap = async () => {
  const cli = new Clirio();
  cli.setModules([
    container.resolve(WeatherModule),
    container.resolve(MathModule),
  ]);

  cli.setGlobalPipe(CommonPipe);
  cli.setGlobalPipe(CommonPipe);
  cli.setGlobalFilter(CommonFilter);

  await cli.execute();
};

bootstrap();
