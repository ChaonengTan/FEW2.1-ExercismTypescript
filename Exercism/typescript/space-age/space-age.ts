class SpaceAge {
    public seconds: number;
    private earthTime: number ;

    constructor(seconds: number) {
        this.seconds = seconds;
        this.earthTime = this.seconds / 31557600;
    }

    onEarth(): number {
        return Math.round((this.earthTime + Number.EPSILON) * 100) / 100;
    }

    onMercury(): number {
        return Math.round((this.earthTime / 0.2408467 + Number.EPSILON) * 100) / 100;
    }

    onVenus(): number {
        return Math.round((this.earthTime / 0.61519726 + Number.EPSILON) * 100) / 100;
    }

    onMars(): number {
        return Math.round((this.earthTime / 1.8808158 + Number.EPSILON) * 100) / 100;
    }

    onJupiter(): number {
        return Math.round((this.earthTime / 11.862615 + Number.EPSILON) * 100) / 100;
    }

    onSaturn(): number {
        return Math.round((this.earthTime / 29.447498 + Number.EPSILON) * 100) / 100;
    }

    onUranus(): number {
        return Math.round((this.earthTime / 84.016846 + Number.EPSILON) * 100) / 100;
    }

    onNeptune(): number {
        return Math.round((this.earthTime / 164.79132 + Number.EPSILON) * 100) / 100;
    }

}

export default SpaceAge