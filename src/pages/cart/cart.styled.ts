import { Base, styled } from "../../stitches.config";

export const WrapperBodySession = styled(Base, {
    padding: '20px 0'
});

export const WrapperFooterSession = styled(Base, {
    padding: '24px 0'
});

export const EmptyCartContainer = styled('div', {
    textAlign: 'center',
    padding: '100px 20px',

});

export const EmptyCartTitle = styled('h2', {
    marginBottom: '0',
    fontWeight: 'bold',
    fontSize: '20px',
});

export const EmptyCartDescription = styled('p', {
    fontSize: '14px',
    margin: '0',
});

export const ButtonContainer = styled('div', {
    display: 'flex',
    marginTop: '24px',
});
