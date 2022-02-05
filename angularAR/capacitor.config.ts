import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-ar',
  webDir: 'dist/angularAR',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.178.76:4200',
    cleartext: true
  }
};

export default config;
