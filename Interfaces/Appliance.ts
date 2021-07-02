export interface Appliance {
  _isOn: boolean;
  turnOn(): void;
  turnOff(): void;
  bake(item: string): void;
}
