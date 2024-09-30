export interface ModelProps {
    /**
     * Set color of the model
     */
    readonly interior: string;
    /**
     * Set color of the model
     */
    readonly exterior: string;
    readonly Wheel: string;
    /**
     * To show or hide model
     */
    readonly visible: boolean
    /**
     * Key of the component
     */
    readonly key: string
}


export const models = ["Maserati2","Lamborghini Aventador J", "Maserati MC20", "Autobianchi Stellina","Truck"] as const;
export type Model = typeof models[number];