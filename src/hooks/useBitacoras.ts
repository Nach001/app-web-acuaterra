import { useState, useEffect } from 'react';
import { fetchBitacoras } from '../services/bitacoraService';
import type { Bitacora } from '../common/types';

const useBitacoras = (reload: boolean): { bitacoras: Array<Bitacora>, loading: boolean, error: string | null } => {
    const [bitacoras, setBitacoras] = useState<Array<Bitacora>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async ():Promise<void> => {
            setLoading(true);
            try {
                const data = await fetchBitacoras();
                setBitacoras(data);
                setError(null);
            } catch (error_) {
                setError('Error al cargar las bitácoras');
                console.error(error_);
            } finally {
                setLoading(false);
            }
        };

        fetchData().catch((error) => {
            console.error('Error fetching bitácoras:', error);
        }
        );
    }, [reload]);

    return { bitacoras, loading, error };
};

export default useBitacoras;