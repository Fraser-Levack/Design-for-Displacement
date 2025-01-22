import { useEffect, useRef } from "react";

interface UploadWidgetProps {
    cloudName: string;
    uploadPreset: string;
    folder?: string;
    sources?: string[];
    multiple?: boolean;
    maxFiles?: number;
    cropping?: boolean;
}

interface UploadWidgetResult {
    event: string;
    info: {
        secure_url?: string;
        public_id?: string;
        resource_type?: string;
    };
}

interface UploadWidgetError {
    message: string;
    statusCode: number;
}

interface CloudinaryWidget {
    open: () => void;
    close: () => void;
    destroy: () => void;
}

interface CloudinaryInstance {
    createUploadWidget: (
        options: UploadWidgetProps,
        callback: (error: UploadWidgetError | null, result: UploadWidgetResult | null) => void
    ) => CloudinaryWidget;
}

declare global {
    interface Window {
        cloudinary: CloudinaryInstance;
    }
}

function UploadWidget({
                          cloudName,
                          uploadPreset,
                          folder,
                          sources,
                          multiple,
                          maxFiles,
                          cropping
                      }: UploadWidgetProps) {
    const cloudinaryRef = useRef<CloudinaryInstance | null>(null);
    const widgetRef = useRef<CloudinaryWidget | null>(null);

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        if (cloudinaryRef.current) {
            widgetRef.current = cloudinaryRef.current.createUploadWidget(
                {
                    cloudName,
                    uploadPreset,
                    folder,
                    sources,
                    multiple,
                    maxFiles,
                    cropping
                },
                (error, result) => {
                    if (error) {
                        console.error('Upload error:', error.message);
                        return;
                    }
                    if (result?.event === 'success') {
                        console.log('Upload URL:', result.info.secure_url);
                    }
                }
            );
        }
    }, [cloudName, uploadPreset, folder, sources, multiple, maxFiles, cropping]);

    return (
        <button
            onClick={() => widgetRef.current?.open()}
        >
            Upload Images
        </button>
    );
}

export default UploadWidget;