import { useParams, useNavigate } from 'react-router-dom';
import { useGenereate } from '../../../services/queries';
import LoadPage from '../../Loading/Loading.page';
import ErrorPage from '../../Error/Error.page';
import useLocale from '../../../redux/useLocale';

export default function Success() {
    const { id } = useParams();
    const { data, isLoading, isError, isSuccess } = useGenereate(id!);
    const { locale } = useLocale()
    const navigate = useNavigate()
    if (isLoading) {
        return <LoadPage message={locale?.loading.looking!} />;
    }

    if (isError) {
        return <ErrorPage />;
    }

    if (isSuccess) {
        navigate('/report/' + id)
        return null
    }

    return null; // Empty return if no state matches
}

