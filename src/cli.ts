#!/usr/bin/env node

import { Clirio } from 'clirio';
import { container } from 'tsyringe';
import { WeatherModule } from './modules/weather/weather.module';
import { MathModule } from './modules/math/math.module';

export const bootstrap = async () => {
  const cli = new Clirio();
  cli.setModules([
    container.resolve(WeatherModule),
    container.resolve(MathModule),
  ]);

  await cli.execute();
};

bootstrap();
